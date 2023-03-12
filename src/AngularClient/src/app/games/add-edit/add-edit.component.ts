import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { GameOption } from 'src/app/Models/GameOption';
import { GameEntryService as GameEntryReadWriteService } from '../../NSwagClientReadWrite/services/GameEntryService';
import { gameEntry } from 'src/app/NSwagClientReadWrite';

@Component({
  selector: 'add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent {
  form!: FormGroup;
  id?: string;
  title!: string;
  loading = false;
  submitting = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private gameService: GameEntryReadWriteService
  ) {}
  
  get description(): FormArray{
    return this.form.get('description') as FormArray;
  }
  addFormDescription(){
    const fa = (this.form.get('description') as FormArray);
    var obj = {};
    obj[this.description.length] = ['', Validators.required];
    fa.push(this.formBuilder.group(obj));
  }
  deleteFormDescription(idx: number) {
      this.description.removeAt(idx);
  }
  
  get options(): FormArray{
    return this.form.get('options') as FormArray;
  }
  addFormGameOption(){
    var option = new GameOption();
    option.next = "";
    option.description = "";
    this.options.push(
      this.formBuilder.group(option)
    );
  }
  deleteFormGameOption(idx: number) {
      this.options.removeAt(idx);
  }
  getFormValidationErrors() {
    Object.keys(this.form.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
         console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }
  ngOnInit() {
      this.id = this.route.snapshot.params['id'];

      this.form = this.formBuilder.group({
          id: ['00000000-0000-0000-0000-000000000000'],
          __T:  ['ge'],
          created: ['0001-01-01T00:00:00+00:00'],
          createdBy: ['unknown'],
          modified: ['0001-01-01T00:00:00+00:00'],
          modifiedBy: ['unknown'],
          name: ['', Validators.required],
          description: this.formBuilder.array([]),
          options: this.formBuilder.array([])
      });

      this.title = 'Add Game Entry';
      if (this.id) {
          // edit mode
          this.title = 'Edit Game Entry';
          this.loading = true;
          this.gameService.gameEntryGet("ge",this.id)
              .pipe(first())
              .subscribe(x => {
                  this.form.patchValue({
                    id: x.id,
                    __T:x.__T,
                    created:x.created,
                    createdBy:x.createdBy,
                    modified:x.modified,
                    modifiedBy:x.modifiedBy,
                    name: x.name
                  }); 
                  let descFormGroups = x.description.map(_ => this.formBuilder.group(x.description));
                  let descFormArray = this.formBuilder.array(descFormGroups);
                  this.form.setControl('description', descFormArray);

                  let gameOptionFormGroups = x.options.map(option => this.formBuilder.group(option));
                  let gameOptionFormArray = this.formBuilder.array(gameOptionFormGroups);
                  this.form.setControl('options', gameOptionFormArray);
                  
                  this.loading = false;
              });
      }
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.submitting = true;
      this.saveGameEntry()
          .pipe(first())
          .subscribe({
              next: () => {
                  this.router.navigateByUrl('/games/view/begin');
              },
              error: error => {
                  this.submitting = false;
              }
          });
  }

  private saveGameEntry() {
      // create or update game entry based on id param
      let formData = this.form.value as gameEntry;
      
      //convert the indexed item caused by the form
      //convert it into a non-index array
      //e.g. description:["0":"myvalue"] to description:["myvalue"]
      formData.description = formData.description.map(value => value[0]);
      
      return this.id
          ? this.gameService.gameEntryPut("ge",this.id!, formData)
          : this.gameService.gameEntryPost("ge",formData);
  }
}

<div class="container">
    <div class="row">
      <div class="col-12 col-md-8 mb-3">
        <mat-card>
          <mat-card-title-group>
            <mat-card-title
              mat-dialog-title
              class="d-flex align-items-center mb-1"
            >
                 Add an Author
            </mat-card-title>
          </mat-card-title-group>

                <mat-divider></mat-divider>
                
                <mat-card-content style="margin-top: 15px">
            <form [formGroup]="form">
              <div class="row">
                <div class="col">
                  <mat-form-field
                    class="mb-2"
                    appearance="fill"
                    style="width: 100%"
                  >
                    <mat-label>title</mat-label>
                    <input
                      type="text"
                      #titleField
                      matInput
                      maxlength="70"
                      placeholder="author"
                      formControlName="author"
                      required
                    />
                      
                



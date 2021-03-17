<template>
  <div class="tab-content">
      <div class="row">
          <div class="col">
              <h5 class="tab-content-step">Step 2</h5>
              <h3 class="tab-content-title">Your Personal Information</h3>
              <span class="tab-content-desc">Enter your personal information for your account.
                  You can change this information at any time</span>
          </div>
      </div>
      <div class="gap"></div>
      <div class="row">
        <div class="col-sm-12 col-md-6">
            <label class="tab-container-input-label" for="addy1">Address Line 1<span class="asterik">*</span></label>
            <input required id="addy1" placeholder="Input Your Address" class="tab-container-input form-control">
        </div>
        <div class="col-sm-12 col-md-6">
            <label class="tab-container-input-label" for="addy2">Address Line 2<span class="asterik"></span></label>
            <input id="addy2" placeholder="Input Your Address" class="tab-container-input form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6">
            <label class="tab-container-input-label" for="sex">Sex<span class="asterik"></span></label>
            <input id="sex" type="text" placeholder="Input Your Sex" class="tab-container-input form-control">
        </div>
        <div class="col-sm-12 col-md-6">
            <label class="tab-container-input-label" for="height">Height (ft)<span class="asterik">*</span></label>
            <input required id="height" placeholder="Input Your Height" class="tab-container-input form-control">
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Personal',
}
</script>

<style scoped lang="scss">
    .gap {
        margin: 30px;
    }
    .asterik {
        color: blue;
    }
    .tab-container {
        &-input {
            &-label {
                width: 100%;
                text-align: left;
            }
        }
    }
</style>
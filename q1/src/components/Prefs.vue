<template>
  <div class="tab-content">
      <div class="row">
          <div class="col">
              <h5 class="tab-content-step">Step 3</h5>
              <h3 class="tab-content-title">Your Account Preferences</h3>
              <span class="tab-content-desc">Personalize your account preferences.
                  You can change this information at any time</span>
          </div>
      </div>
      <div class="gap"></div>
      <div class="row">
        <div class="col-sm-12 col-md-6">
            <label class="tab-container-input-label" for="color">Theme Color<span class="asterik">*</span></label>
            <select class="form-control" required name="color" id="color">
              <option disabled selected="selected" value="def">Choose an Option</option>
              <option value="Dark">Dark Mode</option>
              <option value="Light">Light Mode</option>
              <option value="System">System Default</option>
            </select>
        </div>
        <div class="col-sm-12 col-md-6">
            <label class="tab-container-input-label" for="lang">Language<span class="asterik"></span></label>
            <select class="form-control" required name="lang" id="lang">
              <option disabled selected="selected" value="def">Choose an Option</option>
              <option value="eng">English</option>
              <option value="fren">French</option>
              <option value="span">Spanish</option>
            </select>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6">
            <label class="tab-container-input-label" for="plat">Platform<span class="asterik"></span></label>
            <select class="form-control" required name="plat" id="plat">
              <option disabled selected="selected" value="def">Choose an Option</option>
              <option value="apple">Apple</option>
              <option value="and">Android</option>
              <option value="win">Windows</option>
            </select>
        </div>
        <div class="col-sm-12 col-md-6">
            <label class="tab-container-input-label" for="height">Profile Picture<span class="asterik">*</span></label>
            <input required id="pic" accept=".gif,.jpg,.jpeg,.png,.ico" type="file" placeholder="Upload Your Picture" class="tab-container-input form-control">
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Prefs',
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
<template>
  <div class="tab-content">
      <div class="row">
          <div class="col">
              <h5 class="tab-content-step">Step 1</h5>
              <h3 class="tab-content-title">Your Profile</h3>
              <span class="tab-content-desc">Enter the login information for your account.
                  You can change this information at any time</span>
          </div>
      </div>
      <div class="row">
        <div class="col-6">
            <label for="fname">First Name</label>
            <input id="fname" class="tab-container-input form-control">
        </div>
        <div class="col-6">
            <label for="lname">Last Name</label>
            <input id="lname" class="tab-container-input form-control">
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Basic',
}
</script>

<style scoped lang="scss">

</style>
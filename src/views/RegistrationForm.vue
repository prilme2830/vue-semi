<script setup>
    import { ref, watch } from 'vue'

    const fullName = ref('')
    const email = ref('')
    const phone = ref('')

    //getItem() -> that will retrieve our data from local storage
    fullName.value = localStorage.getItem('fullName') || ''
    email.value = localStorage.getItem('email') || ''
    phone.value = localStorage.getItem('phone') || ''

    //watch() -> monitor changes
    watch(fullName, (newValue) => {
        localStorage.setItem('fullName', newValue)
    })

     watch(email, (newValue) => {
        localStorage.setItem('email', newValue)
    })

     watch(phone, (newValue) => {
        localStorage.setItem('phone', newValue)
    })

    //Clear saved data
    function clearForm() {
        fullName.value = ''
        email.value = ''
        phone.value = ''

        localStorage.removeItem('fullName')
        localStorage.removeItem('email')
        localStorage.removeItem('phone')
        
    }

    //submit form 
    function register() {
        alert(`Registration successful! \nWelcome, ${fullName.value}`)
    }
</script>

<template>
    <div class="container py-5">
        <div class="text-center mb-5">
            <h1 class="fw-bold">
                Registration Form
            </h1>
        </div>

        <div class="col-lg-7">
            <div class="card shadow-sm border-0">
                <div class="card-body p-4">
                    <h3 class="fw-bold" mb-4>
                        Create an Account
                    </h3>

                    <form @submit.prevent="register">
                        <div class="mb-3">
                            <label class="form-label fw-semibold">
                                Full Name
                            </label>
                            <input type="text"
                            class="form-control"
                            v-model="fullName"
                            placeholder="Enter your Full Name"
                            >
                        </div>
                          <div class="mb-3">
                            <label class="form-label fw-semibold">
                               Email
                            </label>
                            <input type="email"
                            class="form-control"
                            v-model="email"
                            placeholder="Enter your Email"
                            >
                        </div>
                          <div class="mb-3">
                            <label class="form-label fw-semibold">
                                Phone Number
                            </label>
                            <input type="tel"
                            class="form-control"
                            v-model="phone"
                            placeholder="Enter your phone number"
                            >
                        </div>

                        <div class="d-flex gap-2">
                            <button 
                            type="submit"
                            class="btn btn-primary"
                            >
                            Register
                        </button>

                        <button 
                        type="button"
                        class="btn btn-outline-danger"
                        @click="clearForm"
                        >
                        Clear Form
                    </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

        <div class="col-lg-5">
            <div class="card shadow-sm border-0">
                <div class="card-body p-4">
                    <h3>Preview</h3>

                    <div class="mb-4">
                        <small class="text-secondary">
                            Full Name
                        </small>
                        <h5 class="mb-0">
                            {{  fullName || 'Data Not Provided' }}
                        </h5>
                    </div>

                    <div class="mb-4">
                        <small class="text-secondary">
                            Email
                        </small>
                        <h5 class="mb-0">
                            {{  email || 'Data Not Provided' }}
                        </h5>
                    </div>

                    <div class="mb-4">
                        <small class="text-secondary">
                            Phone Number
                        </small>
                        <h5 class="mb-0">
                            {{  phone || 'Data Not Provided' }}
                        </h5>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

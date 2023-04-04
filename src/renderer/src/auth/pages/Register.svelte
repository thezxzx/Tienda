<script lang="ts">
    import type { IRegisterForm } from "../interfaces/registerForm.interface"
    import { comparePasswords } from "../utils/comparePasswords"
    import { validateEmail } from "../utils/validateEmail"
      
    const registerForm: IRegisterForm = {
      confirmPassword: '',
      email: '',
      password: ''
    }

    const registerFormErrors = {
      confirmPassword: '',
      email: '',
      password: ''
    }

    const handleEmailChange = (email: string) => {
        if (!validateEmail(email)) {
            registerFormErrors.email = 'No es un correo válido'
        } else {
            registerFormErrors.email = '';
        }

        if (email.trim().length === 0) {
            registerFormErrors.email = 'El correo es obligatorio'
        }
    }

    const handlePasswordChange = (fieldName: string, password: string) => {
        if (!comparePasswords(registerForm.password, registerForm.confirmPassword)) {
            registerFormErrors[fieldName] = 'Las contraseñas no coinciden';
        } else {
            registerFormErrors.password = '';
            registerFormErrors.confirmPassword = '';
        }
        if (password.trim().length < 6) {
            registerFormErrors[fieldName] = 'La contraseña debe tener mínimo 6 caracteres';
        }
        if (password.trim().length === 0) {
            registerFormErrors[fieldName] = 'La contraseña es obligatoria';
        }
    }
    const handleSubmit = (_: any, form: IRegisterForm) => {
        console.log( form );
    }   
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 class="text-5xl font-bold mx-auto pt-4">Registrarse</h1>
        <form class="card-body" on:submit|preventDefault={(e) => handleSubmit(e, registerForm)}>
            <div class="form-control">
                <label class="label" for="email">
                    <span class="label-text">Correo:</span>
                </label>
                <input
                    type="text"
                    placeholder="correo@gmail.com"
                    class="input input-bordered"
                    id="email"
                    bind:value={registerForm.email}
                    on:input={() => handleEmailChange(registerForm.email)}
                />
                <p class="text-center mt-2 text-red-500">{registerFormErrors.email}</p>
            </div>
            <div class="form-control">
                <label class="label" for="password">
                    <span class="label-text">Contraseña:</span>
                </label>
                <input
                    type="password"
                    placeholder="Contraseña"
                    class="input input-bordered"
                    id="password"
                    bind:value={registerForm.password}
                    on:input={() => handlePasswordChange('password',registerForm.password)}
                />
                <p class="text-center mt-2 text-red-500">{registerFormErrors.password}</p>
            </div>
            <div class="form-control">
                <label class="label" for="confirm-password">
                    <span class="label-text">Confirmar contraseña:</span>
                </label>
                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    class="input input-bordered"
                    id="confirm-password"
                    bind:value={registerForm.confirmPassword}
                    on:input={() => handlePasswordChange('confirmPassword', registerForm.confirmPassword)}
                />
                <p class="text-center mt-2 text-red-500">{registerFormErrors.confirmPassword}</p>
            </div>
            <div>
                <label class="label" for="forgotten-password">
                    <a href="#" class="label-text-alt link link-hover" id="forgotten-password">¿Olvidaste la contraseña?</a>
                </label>
            </div>
            <div class="form-control mt-6">
                <button class="btn btn-primary">Registrarse</button>
            </div>
        </form>
    </div>
</div>
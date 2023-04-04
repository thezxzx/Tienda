<script lang="ts">

</script>

<div class="hero min-h-screen bg-base-200">
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 class="text-5xl font-bold mx-auto pt-4">Iniciar sesión</h1>
        <div class="card-body">
            <div class="form-control">
                <label class="label" for="email">
                    <span class="label-text">Correo:</span>
                </label>
                <input type="text" placeholder="correo@gmail.com" class="input input-bordered" id="email" />
            </div>
            <div class="form-control">
                <label class="label" for="password">
                    <span class="label-text">Contraseña</span>
                </label>
                <input type="password" placeholder="Contraseña" class="input input-bordered" id="password" />
            </div>
            <div>
                <label class="label" for="forgotten-password">
                    <a href="#" class="label-text-alt link link-hover" id="forgotten-password">¿No tienes cuenta? Clic aquí para crear una cuenta</a>
                </label>
            </div>
            <div class="form-control mt-6">
                <button class="btn btn-primary">Iniciar Sesión</button>
            </div>
        </div>
    </div>
</div>
class AuthAdministrador {
   private _correo_admin: string;
   private _contraseña_admin: string;

   constructor(
      correo_admin: string,
      contraseña_admin: string
   ) {
      this._correo_admin = correo_admin;
      this._contraseña_admin = contraseña_admin;
   }
   
   //Getters
   get correo_admin(): string {
      return this._correo_admin;
   }
   get contraseña_admin(): string{
      return this._contraseña_admin;
   }

   //Setters
   set correo_admin(correo_admin: string){
      this._correo_admin = correo_admin;
   }
   set contraseña_admin(contraseña_admin: string){
      this._contraseña_admin = contraseña_admin; 
   }
}

export default AuthAdministrador;
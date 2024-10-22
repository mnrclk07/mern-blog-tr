import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              MERN
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Bu bir demo projesidir. E-postanız ve şifrenizle veya Google ile
            kayıt olabilirsiniz.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Kullanıcı adı" />
              <TextInput
                type="text"
                placeholder="Kullanıcı adı"
                id="username"
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="text"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Şifre" />
              <TextInput type="text" placeholder="*******" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Kayıt ol
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Hesabınız var mı?</span>
            <Link to="/sign-in" className="text-blue-500">
              Giriş yap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

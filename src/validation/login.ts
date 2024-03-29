import * as yup from "yup";

export const formSchema = yup.object().shape({
  email: yup.string().required("Email é obrigatório").email("Email inválido!"),
  password: yup.string().required("Senha é obrigatória"),
});

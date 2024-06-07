import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  username: Yup.string().required('Nome de Usuário é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: Yup.number().required('Celular é obrigatório'),
  website: Yup.string().url('Site inválido').required('Site é obrigatório'),
  postalCode: Yup.string().required('Código Postal é obrigatório'),
  city: Yup.string().required('Cidade é obrigatória'),
  street: Yup.string().required('Rua é obrigatória'),
  number: Yup.string().required('Número é obrigatório'),
  companyName: Yup.string().required('Nome da Empresa é obrigatório'),
});

export default function User() {

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
      postalCode: '',
      city: '',
      street: '',
      number: '',
      companyName: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });


  return (
    <div className="mx-auto p-6 m-2 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Criar Usuário</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <p className="text-md font-semibold mb-2 text-gray-700">Dados Pessoais:</p>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              className="w-full p-2 border rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
            <input
              type="text"
              name="username"
              placeholder="Nome de Usuário"
              className="w-full p-2 border rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500">{formik.errors.username}</div>
            ) : null}
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="w-full p-2 border rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
            <input
              type="text"
              name="phone"
              placeholder="Celular"
              className="w-full p-2 border rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500">{formik.errors.phone}</div>
            ) : null}
            <input
              type="text"
              name="website"
              placeholder="Site"
              className="w-full p-2 border rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.website}
            />
            {formik.touched.website && formik.errors.website ? (
              <div className="text-red-500">{formik.errors.website}</div>
            ) : null}
          </div>
        </div>
        <div>
          <p className="text-md font-semibold mb-2 text-gray-700">Endereço:</p>
          <div className="space-y-4">
            <input
              type="text"
              name="postalCode"
              placeholder="Código Postal"
              className="w-full p-2 border rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postalCode}
            />
            {formik.touched.postalCode && formik.errors.postalCode ? (
              <div className="text-red-500">{formik.errors.postalCode}</div>
            ) : null}
            <input
              type="text"
              name="city"
              placeholder="Cidade"
              className="w-full p-2 border rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-red-500">{formik.errors.city}</div>
            ) : null}
            <input
              type="text"
              name="street"
              placeholder="Rua"
              className="w-full p-2 border rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.street}
            />
            {formik.touched.street && formik.errors.street ? (
              <div className="text-red-500">{formik.errors.street}</div>
            ) : null}
            <input
              type="text"
              name="number"
              placeholder="Número"
              className="w-full p-2 border rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.number}
            />
            {formik.touched.number && formik.errors.number ? (
              <div className="text-red-500">{formik.errors.number}</div>
            ) : null}
          </div>
        </div>
        <div>
          <p className="text-md font-semibold mb-2 text-gray-700">Empresa:</p>
          <div className="space-y-4">
            <input
              type="text"
              name="companyName"
              placeholder="Nome da Empresa"
              className="w-full p-2 border rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.companyName}
            />
            {formik.touched.companyName && formik.errors.companyName ? (
              <div className="text-red-500">{formik.errors.companyName}</div>
            ) : null}
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
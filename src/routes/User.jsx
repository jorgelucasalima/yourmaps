import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  city: Yup.string().required('Cidade é obrigatória'),
  geo: Yup.object().shape({
    lat: Yup.number().required('Latitude é obrigatória'),
    lng: Yup.number().required('Longitude é obrigatória'),
  }).required('Geolocalização é obrigatória'),
});

export default function User() {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      city: '',
      geo:
      {
        lat: '',
        lng: '',
      },
    },
    validationSchema,
    onSubmit: values => {
    },
  });


  return (
    <div className="mx-auto p-8 m-6 bg-white-primary rounded-lg md:w-1/2 lg:w-1/3">
      <div className='space-y-4'>
        <h2 className="text-3xl font-bold mb-6 text-blue-primary">Criar Usuário</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6 bg-white-primary">
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              className="w-full p-2 border rounded-lg md:w-96"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="w-full p-2 border rounded-lg md:w-96"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}

            <input
              type="text"
              name="city"
              placeholder="Cidade"
              className="w-full p-2 border rounded-lg md:w-96"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-red-500">{formik.errors.city}</div>
            ) : null}

            <div className="space-y-4">
              <input
                type="number"
                name="geo.lat"
                placeholder="Latitude"
                className="w-full p-2 border rounded-lg md:w-96"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.geo.lat}
              />
              {formik.touched.geo && formik.errors.geo ? (
                <div className="text-red-500">{formik.errors.geo.lat}</div>
              ) : null}

              <input
                type="number"
                name="geo.lng"
                placeholder="Longitude"
                className="w-full p-2 border rounded-lg md:w-96"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.geo.lng}
              />
              {formik.touched.geo && formik.errors.geo ? (
                <div className="text-red-500">{formik.errors.geo.lng}</div>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-2 rounded-lg bg-blue-primary text-white-primary font-semibold hover:bg-blue-secondary transition-colors md:w-96"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
const Layout = ({children}) => {
    return (
        <div className="flex flex-col items-center mt-16">
            {children}
        </div>
    )
}

export { Layout }



/*
en el archivo .eslintrc.cjs agregar el siguiente codigo que no me muestre el error de children 
rules: {
    'react-refresh/only-export-components': 'warn',
    "react/prop-types": "off"
  }, */
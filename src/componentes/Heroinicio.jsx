import React from 'react'
import heroimagen from "../assets/heroimagen.jpg"
import heroimagen2 from"../assets/heroimagen2.jpg"
import heroimagen3 from"../assets/heroimagen3.jpg"


const heroinicio = () => {
  return (
    <>


<div classname="container">
            
    <div className="row   bg-dark text-white">
    <h3 className="text-center py-4">Herramientas utilizadas</h3>
    <div className="col-md-8">
        <div className="card-body">
          <p className=" d-flex flex-column align items:center; justify-content: center"> React es una biblioteca de JavaScript utilizada para construir interfaces de usuario tanto en la web como en aplicaciones nativas. Fue desarrollada por Facebook en 2013 y se ha convertido en una de las bibliotecas más populares para el desarrollo de interfaces de usuario.

Es importante destacar que React no es un framework completo de JavaScript, sino una biblioteca enfocada en la capa de vista de una aplicación. Esto significa que React se puede utilizar junto con otras bibliotecas o frameworks para construir aplicaciones completas.</p>
        </div>
      </div>
      
      <div className="col-md-4">
        <img src={heroimagen} className="img-fluid img-thumbnail" />
      </div>
      <hr className="my-5" />
    </div>


    <div className="row   bg-dark text-white">
    
    <div className="col-md-4">
        <img src={heroimagen2} className="img-fluid img-thumbnail" />
      </div>
    <div className="col-md-8">
        <div className="card-body">
          <p className=" col-md-6 d-flex flex-column align-items-center justify-content-center " > React es una biblioteca de JavaScript utilizada para construir interfaces de usuario tanto en la web como en aplicaciones nativas. Fue desarrollada por Facebook en 2013 y se ha convertido en una de las bibliotecas más populares para el desarrollo de interfaces de usuario.

Es importante destacar que React no es un framework completo de JavaScript, sino una biblioteca enfocada en la capa de vista de una aplicación. Esto significa que React se puede utilizar junto con otras bibliotecas o frameworks para construir aplicaciones completas.</p>
        </div>
      </div>
      <hr className="my-5" />
    </div>





    <div className="row    bg-dark text-white">
    
    <div className="col-md-8">
        <div className="card-body">
          <p className=" .d-flex; align items:center; justify-content: center " > React es una biblioteca de JavaScript utilizada para construir interfaces de usuario tanto en la web como en aplicaciones nativas. Fue desarrollada por Facebook en 2013 y se ha convertido en una de las bibliotecas más populares para el desarrollo de interfaces de usuario.

Es importante destacar que React no es un framework completo de JavaScript, sino una biblioteca enfocada en la capa de vista de una aplicación. Esto significa que React se puede utilizar junto con otras bibliotecas o frameworks para construir aplicaciones completas.</p>
        </div>
      </div>
      
      <div className="col-md-4">
        <img src={heroimagen3} className="img-fluid img-thumbnail" />
      </div>
      <hr className="my-5" />
    </div>

    
  
    </div>

     
    
    </>
  )
}

export default heroinicio
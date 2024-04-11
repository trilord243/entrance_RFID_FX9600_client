import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { invitados } from './invitados.js';
import logo from './asset.png';
import LOGOSTV from './symtech.jpg';
import bluestar from './bluestar.jpg'
import zebra1 from './zebra1.jpg'
const apiUrl = import.meta.env.VITE_API_URL;
const socket = io(apiUrl);

function App() {
  const [nombres, setNombres] = useState(new Set());
  const [nombresQuitados, setNombresQuitados] = useState(new Set());
  const [invitadoActual, setInvitadoActual] = useState(null);

  useEffect(() => {
    socket.on('data', (data) => {
      const nombreCompleto = `${data.name} ${data.lastName}`;
      setNombres((prevNombres) => new Set(prevNombres).add(nombreCompleto));

    });

    return () => {
      socket.off('data');
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNombres((prevNombres) => {
        const nombresArray = Array.from(prevNombres);

        if (nombresArray.length > 1) {
          setNombresQuitados((prevNombresQuitados) => new Set(prevNombresQuitados).add(nombresArray[0]));
          return new Set(nombresArray.slice(1));
        }
        return prevNombres;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const nombresArray = Array.from(nombres);

  useEffect(() => {
    if (nombresArray.length === 0) {
      setInvitadoActual(null)
    } else {

      setInvitadoActual(invitados.find((invitado) => invitado.name === nombresArray[0].split(' ')[0]))
    }


  }, [nombresArray])

  const nombresQuitadosArray = Array.from(nombresQuitados).join(', ');

  return (
    <>
      <div className='h-screen flex bg-no-repeat '>
        <div className='flex'>
          <img src={logo} alt="Logo" className='w-[30rem] h-full' />

        </div>
        <div className='flex flex-col  w-full mx-auto py-14'>
          <div className='flex w-full    justify-center gap-16 '>

            <img src={bluestar} className=' w-auto h-[78px]' alt="logo" />
            <img src={LOGOSTV} className='w-auto h-[78px]' alt="logo" />
            <img src={zebra1} className='w-auto h-[74px] mr-11' alt="logo" />
          </div>



          <h1 className='text-[6rem] ml-40   font-semibold  mt-7'>
            ¡Bienvenido!
          </h1>
          {invitadoActual && (
            <div key={nombresArray[0]} className=' animate-jump-in animate-duration-[2000ms]  mt-5'>
              <h2 className='text-7xl text-center mt-7'>
                {nombresArray[0]}
              </h2>
              <p className='text-center mt-8 text-4xl'>{invitadoActual.company}</p>
            </div>
          )}


          <div className=' overflow-hidden whitespace-nowrap mt-28'>
            <p className='animate-scroll-left text-3xl'>{nombresQuitadosArray} </p>
          </div>


        </div>
      </div>
    </>
  );
}

export default App;

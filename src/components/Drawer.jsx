import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'



export default function Drawer({open, setOpen}) {
const [dataAgenda, setDataAgenda] = useState({
  nome: "",
  data: "",
  hora: "",
});

function handleChangeInput(e) {
  const { name, value } = e.target;

    setDataAgenda(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Dados agendados:", dataAgenda)

    setOpen(false) 
  }

  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/50 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-gray-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="relative flex h-full flex-col overflow-y-auto bg-white/20 backdrop-blur-lg py-6 shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-white/10">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-center font-semibold text-[#a3772d]">AGENDAR</DialogTitle>
                  </div>
                  <form onSubmit={handleSubmit} className="relative mt-6 flex flex-col px-4 gap-4 sm:px-10 ">
                    <label className='font-bold text-white'>Nome Completo</label>
                    <input 
                    type="text"
                    name='nome'
                    value={dataAgenda.nome} 
                    onChange={handleChangeInput} 
                    required
                    placeholder='nome completo' 
                    className='bg-white/10 w-full p-2 rounded text-white font-bold' />

                    <label className='font-bold text-white'>Data</label>
                    <input
                     type="date"
                     name='data'
                     value={dataAgenda.data}
            
                     onChange={handleChangeInput} 
                     className='bg-white/10 w-full p-2 rounded text-white font-bold' />

                    <label className='font-bold text-white'>Horário</label>
                    <input 
                    type="time"
                    name='hora'
                    value={dataAgenda.hora}
                    required
                    onChange={handleChangeInput} 
                    className='bg-white/10 w-full p-2 rounded text-white font-bold' />

                     <button type='submit' className="bg-[#A3772D] text-white px-4 py-2 rounded hover:bg-black transition-all mt-10 cursor-pointer">
            Agendar 
          </button>
                  </form>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

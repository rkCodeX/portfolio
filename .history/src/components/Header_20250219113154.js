import React from 'react';

function Header(){
    return(
      <>
        <div className="h-screen bg-cover bg-no-repeat bg-header">
          <div className='w-screen h-screen bg-cover bg-[#2b2f38]/90'>
            <div className="flex flex-col items-center justify-center w-screen h-screen">
              <div className="w-100% h-auto border-2 border-red-800"></div>
              <div className="w-100% h- border-2 border-red-800"></div>
            </div>
          </div>

        </div>
      </>
    );
}

export default Header;
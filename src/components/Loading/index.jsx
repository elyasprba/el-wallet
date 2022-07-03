import { Spinner } from 'react-bootstrap';

export default function Loading() {
   return (
      <>
         <div
            className="loading-wrapper d-flex"
            style={{
               width: '100%',
               height: '100%',
               justifyContent: 'center',
               alignItems: 'center',
               position: 'fixed',
               zIndex: '1056',
               background: 'rgba(6, 6, 6, 0.5)',
            }}
         >
            <div
               className=" d-flex"
               style={{
                  padding: '10px',
                  gap: '10px',
                  justifyContent: 'center',
                  color: '#fff',
               }}
            >
               <Spinner animation="border" />
               <h3> Loading . . . </h3>
            </div>
         </div>
      </>
   );
}

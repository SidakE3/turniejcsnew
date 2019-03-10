import React from 'react'

const AdminInfo = () => {
  return (
     <div>
        <div className="card mt-2">
            <div className="card-body">
            <button className="btn btn-success">Dodaj mecz</button>
                <p className="m-0">Następny mecz z: </p>
            </div>
            <div className="card-footer">O godzinie 00:00</div>
        </div>

    </div>
  )
}

export default AdminInfo

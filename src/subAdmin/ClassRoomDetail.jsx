import { useParams } from 'react-router-dom';

const ClassRoomDetail = () => {
   const { id } = useParams();
  return (
    <div>
      classroom details
      <div>
            <h1>Classroom Details</h1>
            <p>Classroom ID: {id}</p>
        </div>
    </div>
  )
}

export default ClassRoomDetail

export default function Practice() {
  const student = [];
  return (
    <>
      {/* <p>{student.length && "No Students found!"}</p> */}
      {/* First Way */}
      <p>{student.length === 0 && "No Students found!"}</p>
      {/* Second Way */}
      <p>{!student.length && "No Students found!"}</p>
      <p>Number of students: {student.length}</p>
    </>
  );
}

export const Practiced = () => {
  return <>Hii</>;
};

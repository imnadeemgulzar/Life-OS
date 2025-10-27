const NoteItem = ({note}) => {
  return <div className="gap-3 flex flex-col">
    <h3 className="text-xl capitalize font-bold text-gray-500 text-center">{note.title}</h3>
    <h3 className=" text-gray-700 p-2">{note.snippet}</h3>
  </div>;
};

export default NoteItem;

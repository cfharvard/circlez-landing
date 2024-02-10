const BoardMember = props => {
    return (
        <div className="bg-zinc-900 rounded-3xl p-8 b flex flex-col items-center justify-center shadow-lg shadow-black ml-14 mr-14 md:ml-0 md:mr-0">
              <img src={props.img} alt={props.name} className="rounded-lg mt-10 mb-10 w-2/3" />
              <p className="font-bold text-xl mb-4 text-whit bg-zinc-900 md:inter text-center">{props.name}</p>
              <p className="text-sm text-white bg-zinc-900 md:inter text-center">
                {props.description}
              </p>
          </div>

    );
}
export default BoardMember;
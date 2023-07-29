import React from "react";

const List = ({ num, Content, mark }) => {
  return (
    <div className="flex items-start gap-3 pb-3">
      <div>
        <span className="rounded-full bg-zinc-800 text-xs  pr-1.5 pl-1.5   mr-3">
          {num}
        </span>
      </div>
      <div>
        <span className=" mb-2 text-base text-blue-600">{mark}</span>
        <span className=" mb-2 text-base">{Content}</span>
        <span className="rounded-full border-solid border-2  border-slate-600 text-xs text-slate-600 pr-1.5 pl-1.5 ">
          !
        </span>
      </div>
    </div>
  );
};

export default List;

<ol>
  <li>
    Copy the Staging environmental variables and store them on your server
  </li>
  <li>
    <span>Configure redirect URIs</span> coming from WorkOS back to your
    application.
  </li>
  <li>
    <span>Create an organization</span> and add connections are directories for
    your customer.
  </li>
</ol>;

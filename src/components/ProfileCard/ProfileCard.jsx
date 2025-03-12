import React from "react";

const devProfile = {
  fullName: "Ma. Agustina",
  stack: ["JavaScript", "React", "Node.js", "TypeScript", "Express", "MongoDB"],
  dedicated: true,
  fastLearner: true,
  problemSolver: true,
  availableForWork: function (dedicated, problemSolver, stack) {
    return dedicated && problemSolver && stack.length >= 5;
  },
};

const ProfileCard = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg font-mono max-w-xl mx-auto overflow-hidden">
      <div className="w-full">
        <pre className="whitespace-pre-wrap text-left break-words">
          <span className="text-red-400">const</span>{" "}
          <span className="text-blue-400">devProfile</span> = {"{"}
          <br />
          &nbsp;&nbsp;<span className="text-green-400">fullName</span>:{" "}
          <span className="text-yellow-400">'{devProfile.fullName}'</span>,
          <br />
          &nbsp;&nbsp;<span className="text-green-400">stack</span>: [
          {devProfile.stack.map((tech, index) => (
            <span key={index} className="text-yellow-400">
              '{tech}'{index !== devProfile.stack.length - 1 && ", "}
            </span>
          ))}
          ],
          <br />
          &nbsp;&nbsp;<span className="text-green-400">dedicated</span>:{" "}
          <span className="text-blue-400">{String(devProfile.dedicated)}</span>,
          <br />
          &nbsp;&nbsp;<span className="text-green-400">fastLearner</span>:{" "}
          <span className="text-blue-400">
            {String(devProfile.fastLearner)}
          </span>
          ,
          <br />
          &nbsp;&nbsp;<span className="text-green-400">
            problemSolver
          </span>:{" "}
          <span className="text-blue-400">
            {String(devProfile.problemSolver)}
          </span>
          ,
          <br />
          &nbsp;&nbsp;<span className="text-green-400">
            availableForWork
          </span>: <span className="text-blue-400">function</span>(dedicated,
          problemSolver, stack) {"{"}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">return</span> (
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-blue-400">dedicated</span> && <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-blue-400">problemSolver</span> && <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-blue-400">stack.length</span> {">="} 5
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;);
          <br />
          &nbsp;&nbsp;{"}"},
          <br />
          {"};"}
        </pre>
      </div>
    </div>
  );
};

export default ProfileCard;

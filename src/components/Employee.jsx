// import FilePresentIcon from "@mui/icons-material/FilePresent";
// import PlaceIcon from "@mui/icons-material/Place";
// import TypeIcon from "@mui/icons-material/Type";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import { useState } from "react";
// import PaymentsIcon from "@mui/icons-material/Payments";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

// export default function ProjectDetail({ project }) {
//   function rupiahFormat(num) {
//     return new Intl.NumberFormat("ID-id", {
//       style: "currency",
//       currency: "IDR",
//     }).format(num);
//   }

//   function dateFormat(value) {
//     const date = new Date(value);
//     const formattedDate = date.toLocaleDateString("en-GB", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//     return formattedDate;
//   }

//   function locationFormat(str) {
//     return str
//       .split(" ")
//       .map((word) => word.substring(0, 1) + word.substring(1).toLowerCase())
//       .join(" ");
//   }

//   const [isLoading, setIsLoading] = useState(false);

//   return (
//     <>
//       <div className="border-b pb-4 mb-4">
//         <p className="float-right inline-block bg-gray-600 py-1 px-2 rounded-md text-sm font-medium text-white hover:bg-gray-700">
//           {project?.Category?.name}
//         </p>
//         <p className="block text-xl font-medium text-gray-700 w-1/2">
//           {project?.name}
//         </p>
//         <p className="mt-2 text-sm text-gray-700">
//           Posted by {project?.Company?.name}
//         </p>
//         <p className="mt-3 text-md">{project?.description}</p>
//         <p className="mt-2 text-sm text-gray-700">
//           Posted on {project.createdAt ? dateFormat(project.createdAt) : ""}
//         </p>
//         <div className="mt-4 grid grid-cols-5">
//           <div className="flex align-middle">
//             <PaymentsIcon className="text-indigo-800" />
//             <p className="ml-1">
//               {project.price ? rupiahFormat(project.price) : ""}
//             </p>
//           </div>
//           <div className="flex align-middle">
//             <FilePresentIcon className="text-indigo-800" />
//             <p className="ml-1">{project?.Bids?.length ?? 0} proposals</p>
//           </div>
//           <div className="flex align-middle">
//             <PeopleAltIcon className="text-indigo-800" />
//             <p className="ml-1">{project?.type}</p>
//           </div>
//           <div className="flex align-middle">
//             <PlaceIcon className="text-indigo-800" />
//             <p className="ml-1">
//               {project.Company ? locationFormat(project.Company.location) : ""}
//             </p>
//           </div>
//           <div className="flex align-middle">
//             <CheckCircleOutlineIcon className="text-indigo-800" />
//             <p className="ml-1">{project?.status}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

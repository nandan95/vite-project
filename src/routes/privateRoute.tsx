// import { ReactNode, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate, useNavigate } from "react-router-dom";
// import { postDataApi } from "src/apis/method";
// import ForceLogoutModal from "src/components/common/Modal/ForceLogoutModal";
// import { clearAllState } from "src/containers/core/redux/slices/authSlice";
// import { setLoading } from "src/redux/slices/globalSlice";
// import { showAlert } from "src/utils/alert";
// import getErrorMessage from "src/utils/common/axiosError";
// import { apiRoutes } from "src/utils/common/constants";
// import { isAuthenticatedUser } from "src/utils/common/constants/session";
// import { HttpResponse, USEREnum } from "src/utils/common/types";
// import ROUTES from "./routesPaths";
// import { setEventListenerAttached } from "src/apis/eventListenerFlag";
// import { RootReducerType } from "src/redux/rootReducers";
// import { TokenResponse } from "src/containers/core/redux/types/authTypes";
// import { setNavigate } from "src/apis/axios.instance";

// export const triggerForceLogoutEvent = () => {
//   window.dispatchEvent(new Event("forceLogoutEvent"));
// };

// const PrivateRoute = ({ children }: { children: ReactNode }) => {
//   const [forceLogoutModal, setForceLogoutModal] = useState(false);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   setNavigate(navigate)

//   const data: TokenResponse | object = useSelector(
//     (state: RootReducerType) => state.loginData?.data || {},
//   );

//   let userType: string | number | null = null;
//   if ("user_type" in data) {
//     userType = (data as TokenResponse).user_type ?? null;
//   }

//   const isOwner = (): boolean => userType === USEREnum.CAR_WASH_OWNER;

//   const handleLogout = async () => {
//     try {
//       dispatch(setLoading(true));
//       const response: unknown = await postDataApi({ path: apiRoutes.LOGOUT });
//       const typedResponse = response as HttpResponse;

//       if (typedResponse && typedResponse.statusCode === 200) {
//         sessionStorage.clear();
//         localStorage.clear();
//         dispatch(clearAllState());
//         navigate(ROUTES.LOGIN);
//       }
//       dispatch(setLoading(false));
//     } catch (error: unknown) {
//       dispatch(setLoading(false));
//       const errorMessage = getErrorMessage(error);
//       showAlert(2, errorMessage);
//     }
//   };

//   useEffect(() => {
//     const handleStorageChange = () => {
//       const forceLogout = JSON.parse(
//         localStorage.getItem("forceLogoutPayload") || "{}",
//       );
//       if (forceLogout?.isForceLogout) {
//         setTitle(forceLogout.title);
//         setDescription(forceLogout.description);
//         setForceLogoutModal(true);
//         localStorage.removeItem("forceLogoutPayload");
//       }
//     };

//     window.addEventListener("storage", handleStorageChange);
//     window.addEventListener("forceLogoutEvent", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//       window.removeEventListener("forceLogoutEvent", handleStorageChange);
//       setEventListenerAttached(false);
//     };
//   }, []);

//   // Redirect to /org-setup if the organization is not configured
//   useEffect(() => {
//     if (
//       isAuthenticatedUser() &&
//       isOwner() &&
//       !(data as TokenResponse).is_organization_configured
//     ) {
//       navigate(ROUTES.ORG_SETUPNEW, { replace: true });
//     }
//   }, [data, navigate]);

//   return isAuthenticatedUser() ? (
//     <>
//       {isOwner() && (data as TokenResponse).is_organization_configured ? (
//         <>
//           {children}
//           <ForceLogoutModal
//             open={forceLogoutModal}
//             title={title}
//             description={description}
//             handleSubmit={handleLogout}
//           />
//         </>
//       ) : (
//         <>
//           {children}{" "}
//           <ForceLogoutModal
//             open={forceLogoutModal}
//             title={title}
//             description={description}
//             handleSubmit={handleLogout}
//           />
//         </>
//       )}
//     </>
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

// export default PrivateRoute;

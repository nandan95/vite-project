import { lazy } from "react";
import LazyLoader from "../../utils/routesContainer";
import { SENSING_SIDENAV_ROUTES } from "./routesPaths";


const SensingHome = LazyLoader(

    lazy(
      () => import("../modules/sensing-aqua-lab-system"),
    ),
  ); 
 
 
 export const sensingRoutesConfig = [

    {
      path: SENSING_SIDENAV_ROUTES.HOME,
      isCommon: true,
      component: SensingHome
    },
    // {
    //   path: SENSING_SIDENAV_ROUTES.AQUA_LAB_SYSTEM,
    //   isPrivate: true,
    //   component: SensingAquaLabSystem,
    // },
    // {
    //   path: SENSING_SIDENAV_ROUTES.CHEMICAL_INVENTORY,
    //   isPrivate: true,
    //   component: SensingChemicalInventory,
    // },
    // {
    //   path: SENSING_SIDENAV_ROUTES.WATER_SOURCE_CONFIG,
    //   isPrivate: true,
    //   component: SensingWaterSourceConfig,
    // },
    // {
    //   path: SENSING_SIDENAV_ROUTES.PACKAGES,
    //   isPrivate: true,
    //   component: SensingPackages,
    // },
    // {
    //   path: SENSING_SIDENAV_AQUA_LAB_ROUTES.PANEL_CONFIG,
    //   isPrivate: true,
    //   component: PanelConfig,
    // },
    // {
    //   path: SENSING_SIDENAV_AQUA_LAB_ROUTES.PUMP_CONFIG,
    //   isPrivate: true,
    //   component: PumpConfig,
    // },
    // {
    //   path: CHEMICAL_INVENTORY_ROUTES.INVENTORY,
    //   isPrivate: true,
    //   component: AddEditInventory,
    // },
    
    // {
    //   path: CHEMICAL_INVENTORY_ROUTES.CHEMICAL_DETAIL,
    //   isPrivate: true,
    //   component: ChemicalDetail,
    // },
  ];
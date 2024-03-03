import React, { useEffect } from "react";

// import data from "../data.json";
import { requestDrugs } from "../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getDrugs, getFilteredData } from "../redux/selectors";
import PharmacyList from "../components/Shop/Pharmacy/PharmacyList";
import DrugsList from "../components/Shop/Drugs/DrugsList";

const ShopPage = () => {
  const dispatch = useDispatch();
  const drugs = useSelector(getDrugs);
  const filteredDrugs = useSelector(getFilteredData);


  useEffect(() => {
    dispatch(requestDrugs());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <PharmacyList drugs={drugs}></PharmacyList>
      <DrugsList drugs={filteredDrugs===null||filteredDrugs.length===0?drugs:filteredDrugs}></DrugsList>
    </div>
  );
};

export default ShopPage;

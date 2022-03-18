import { createSlice } from "@reduxjs/toolkit";

export const KPIDetailsSlice = createSlice({
  name: "Cards",
  initialState: {
    KPI: null,
    years: null,
  },
  reducers: {
    setKPI: (state, data) => {
      state.KPI = data.payload;
    },
    setYears: (state, data) => {
      state.years = data.payload;
    },
    replaceTarget: (state, data) => {
      const year = state.years.find((y) => y.pk === data.payload.yearPK);

      year.targets = year.targets.map((target) => {
        if (target.pk === data.payload.target.pk) {
          return data.payload.target;
        }

        return target;
      });

      state.years = state.years.map((y) =>
        year.pk === data.payload.yearPK ? year : y
      );
    },
  },
});

export const { setKPI, setYears, replaceTarget } = KPIDetailsSlice.actions;

export default KPIDetailsSlice.reducer;
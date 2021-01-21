const { BreakingChangeType } = require("graphql");

const getAllCars = () => {
    return Cars;
}

const getCarsByYear = (year) => {
    return Cars.filter(x => x.model_year == year);
}

const getCarsByBrand = (brand) => {
    return Cars.filter(x => x.model_make_id === brand)
}



let Cars =
    [
        {
            "model_id": "73963",
            "model_make_id": "Audi",
            "model_name": "A3",
            "model_trim": "1.8 TFSI Premium 2dr Convertible (1.8L 4cyl Turbo 6AM)",
            "model_year": "2019",
            "model_body": "Compact Cars",
            "model_engine_position": "Front",
            "model_engine_cc": "1800",
            "model_engine_cyl": "4",
            "model_engine_type": "Inline",
            "model_engine_valves_per_cyl": "4",
            "model_engine_power_ps": "170",
            "model_engine_power_rpm": null,
            "model_engine_torque_nm": "200",
            "model_engine_torque_rpm": null,
            "model_engine_bore_mm": null,
            "model_engine_stroke_mm": null,
            "model_engine_compression": "9.6",
            "model_engine_fuel": "Premium Unleaded (Recommended)",
            "model_top_speed_kph": null,
            "model_0_to_100_kph": null,
            "model_drive": "Front Wheel Driv",
            "model_transmission_type": "Automated Manual",
            "model_seats": null,
            "model_doors": "2",
            "model_weight_kg": null,
            "model_length_mm": null,
            "model_width_mm": null,
            "model_height_mm": null,
            "model_wheelbase_mm": null,
            "model_lkm_hwy": "35.0",
            "model_lkm_mixed": "28.0",
            "model_lkm_city": "24.0",
            "model_fuel_cap_l": "13",
            "model_sold_in_us": "1",
            "model_co2": null,
            "model_make_display": "Audi",
            "model_engine_l": "1.8",
            "model_engine_ci": "110",
            "model_engine_bore_in": null,
            "model_engine_stroke_in": null,
            "model_engine_valves": "16",
            "model_engine_power_hp": "168",
            "model_engine_power_kw": "125",
            "model_engine_torque_lbft": "148",
            "model_engine_torque_kgm": "20",
            "model_top_speed_mph": null,
            "model_weight_lbs": null,
            "model_length_in": null,
            "model_width_in": null,
            "model_height_in": null,
            "model_wheelbase_in": null,
            "model_mpg_hwy": "7",
            "model_mpg_city": "10",
            "model_mpg_mixed": "8",
            "model_fuel_cap_g": "3.4",
            "make_display": "Audi",
            "make_country": "Germany",
            "ExtColors": [],
            "IntColors": []
        },
        { "model_id": "74858", "model_make_id": "Audi", "model_name": "A4", "model_trim": "2.0T Premium 4dr Sedan (2.0L 4cyl Turbo CVT)", "model_year": "2019", "model_body": "Compact Cars", "model_engine_position": "Front", "model_engine_cc": "2000", "model_engine_cyl": "4", "model_engine_type": "Inline", "model_engine_valves_per_cyl": "4", "model_engine_power_ps": "220", "model_engine_power_rpm": null, "model_engine_torque_nm": "258", "model_engine_torque_rpm": null, "model_engine_bore_mm": null, "model_engine_stroke_mm": null, "model_engine_compression": "9.6", "model_engine_fuel": "Premium Unleaded (Required)", "model_top_speed_kph": null, "model_0_to_100_kph": null, "model_drive": "Front Wheel Driv", "model_transmission_type": "Automatic", "model_seats": null, "model_doors": "4", "model_weight_kg": "3516", "model_length_mm": null, "model_width_mm": null, "model_height_mm": null, "model_wheelbase_mm": null, "model_lkm_hwy": "32.0", "model_lkm_mixed": "27.0", "model_lkm_city": "24.0", "model_fuel_cap_l": "16", "model_sold_in_us": "1", "model_co2": null, "model_make_display": "Audi", "model_engine_l": "2.0", "model_engine_ci": "122", "model_engine_bore_in": null, "model_engine_stroke_in": null, "model_engine_valves": "16", "model_engine_power_hp": "217", "model_engine_power_kw": "162", "model_engine_torque_lbft": "190", "model_engine_torque_kgm": "26", "model_top_speed_mph": null, "model_weight_lbs": "7751", "model_length_in": null, "model_width_in": null, "model_height_in": null, "model_wheelbase_in": null, "model_mpg_hwy": "7", "model_mpg_city": "10", "model_mpg_mixed": "9", "model_fuel_cap_g": "4.2", "make_display": "Audi", "make_country": "Germany", "ExtColors": [], "IntColors": [] },
        { "model_id": "74926", "model_make_id": "Audi", "model_name": "A6", "model_trim": "2.0T Premium 4dr Sedan (2.0L 4cyl Turbo CVT)", "model_year": "2019", "model_body": "Midsize Cars", "model_engine_position": "Front", "model_engine_cc": "2000", "model_engine_cyl": "4", "model_engine_type": "Inline", "model_engine_valves_per_cyl": "4", "model_engine_power_ps": "220", "model_engine_power_rpm": null, "model_engine_torque_nm": "258", "model_engine_torque_rpm": null, "model_engine_bore_mm": null, "model_engine_stroke_mm": null, "model_engine_compression": "9.6", "model_engine_fuel": "Premium Unleaded (Required)", "model_top_speed_kph": null, "model_0_to_100_kph": null, "model_drive": "Front Wheel Driv", "model_transmission_type": "Automatic", "model_seats": null, "model_doors": "4", "model_weight_kg": "3726", "model_length_mm": null, "model_width_mm": null, "model_height_mm": null, "model_wheelbase_mm": null, "model_lkm_hwy": "33.0", "model_lkm_mixed": "28.0", "model_lkm_city": "25.0", "model_fuel_cap_l": "20", "model_sold_in_us": "1", "model_co2": null, "model_make_display": "Audi", "model_engine_l": "2.0", "model_engine_ci": "122", "model_engine_bore_in": null, "model_engine_stroke_in": null, "model_engine_valves": "16", "model_engine_power_hp": "217", "model_engine_power_kw": "162", "model_engine_torque_lbft": "190", "model_engine_torque_kgm": "26", "model_top_speed_mph": null, "model_weight_lbs": "8214", "model_length_in": null, "model_width_in": null, "model_height_in": null, "model_wheelbase_in": null, "model_mpg_hwy": "7", "model_mpg_city": "9", "model_mpg_mixed": "8", "model_fuel_cap_g": "5.3", "make_display": "Audi", "make_country": "Germany", "ExtColors": [], "IntColors": [] },
        { "model_id": "73955", "model_make_id": "Audi", "model_name": "A8", "model_trim": "3.0T quattro 4dr Sedan AWD (3.0L 6cyl S\/C 8A)", "model_year": "2019", "model_body": "Midsize Cars", "model_engine_position": "Front", "model_engine_cc": "3000", "model_engine_cyl": "6", "model_engine_type": "V", "model_engine_valves_per_cyl": "4", "model_engine_power_ps": "333", "model_engine_power_rpm": null, "model_engine_torque_nm": "325", "model_engine_torque_rpm": null, "model_engine_bore_mm": null, "model_engine_stroke_mm": null, "model_engine_compression": "10.3", "model_engine_fuel": "Premium Unleaded (Required)", "model_top_speed_kph": null, "model_0_to_100_kph": null, "model_drive": "All Wheel Drive", "model_transmission_type": "Automatic", "model_seats": null, "model_doors": "4", "model_weight_kg": "4365", "model_length_mm": null, "model_width_mm": null, "model_height_mm": null, "model_wheelbase_mm": null, "model_lkm_hwy": "29.0", "model_lkm_mixed": "22.0", "model_lkm_city": "19.0", "model_fuel_cap_l": "24", "model_sold_in_us": "1", "model_co2": null, "model_make_display": "Audi", "model_engine_l": "3.0", "model_engine_ci": "183", "model_engine_bore_in": null, "model_engine_stroke_in": null, "model_engine_valves": "24", "model_engine_power_hp": "328", "model_engine_power_kw": "245", "model_engine_torque_lbft": "240", "model_engine_torque_kgm": "33", "model_top_speed_mph": null, "model_weight_lbs": "9623", "model_length_in": null, "model_width_in": null, "model_height_in": null, "model_wheelbase_in": null, "model_mpg_hwy": "8", "model_mpg_city": "12", "model_mpg_mixed": "11", "model_fuel_cap_g": "6.3", "make_display": "Audi", "make_country": "Germany", "ExtColors": [], "IntColors": [] },
        { "model_id": "74990", "model_make_id": "BMW", "model_name": "3 Series", "model_trim": "320i 4dr Sedan (2.0L 4cyl Turbo 8A)", "model_year": "2019", "model_body": "Compact Cars", "model_engine_position": "Front", "model_engine_cc": "2000", "model_engine_cyl": "4", "model_engine_type": "Inline", "model_engine_valves_per_cyl": "4", "model_engine_power_ps": "180", "model_engine_power_rpm": null, "model_engine_torque_nm": "200", "model_engine_torque_rpm": null, "model_engine_bore_mm": null, "model_engine_stroke_mm": null, "model_engine_compression": "Not Avai", "model_engine_fuel": "Premium Unleaded (Required)", "model_top_speed_kph": null, "model_0_to_100_kph": null, "model_drive": "Rear Wheel Drive", "model_transmission_type": "Automatic", "model_seats": null, "model_doors": "4", "model_weight_kg": "3340", "model_length_mm": null, "model_width_mm": null, "model_height_mm": null, "model_wheelbase_mm": null, "model_lkm_hwy": "36.0", "model_lkm_mixed": "28.0", "model_lkm_city": "24.0", "model_fuel_cap_l": "16", "model_sold_in_us": "1", "model_co2": null, "model_make_display": "BMW", "model_engine_l": "2.0", "model_engine_ci": "122", "model_engine_bore_in": null, "model_engine_stroke_in": null, "model_engine_valves": "16", "model_engine_power_hp": "178", "model_engine_power_kw": "132", "model_engine_torque_lbft": "148", "model_engine_torque_kgm": "20", "model_top_speed_mph": null, "model_weight_lbs": "7363", "model_length_in": null, "model_width_in": null, "model_height_in": null, "model_wheelbase_in": null, "model_mpg_hwy": "7", "model_mpg_city": "10", "model_mpg_mixed": "8", "model_fuel_cap_g": "4.2", "make_display": "BMW", "make_country": "Germany", "ExtColors": [], "IntColors": [] }
    ]

module.exports = {
    getAllCars,
    getCarsByBrand,
    getCarsByYear
}
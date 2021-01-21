const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: Int!
        userName: String!
        name: String!
    }

    type Car {
        model_id: String
        model_make_id: String
        model_name: String
        model_trim: String
        model_year: Int
        model_body: String
        model_engine_position: String
        model_engine_cc: Int
        model_engine_cyl: Int
        model_engine_type: String
        model_engine_valves_per_cyl:Int
        model_engine_power_ps: Int
        model_engine_power_rpm: String
        model_engine_torque_nm: Int
        model_engine_torque_rpm: String
        model_engine_bore_mm: String
        model_engine_stroke_mm: String
        model_engine_compression:Int
        model_engine_fuel:String
        model_top_speed_kph: String
        model_0_to_100_kph: String
        model_drive: String
        model_transmission_type: String
        model_seats: String
        model_doors:Int
        model_weight_kg: String
        model_length_mm: String
        model_width_mm: String
        model_height_mm: String
        model_wheelbase_mm: String
        model_lkm_hwy: Int
        model_lkm_mixed: Int
        model_lkm_city: Int
        model_fuel_cap_l: Int
        model_sold_in_us: Int
        model_co2: String
        model_make_display: String
        model_engine_l:Int
        model_engine_ci: Int
        model_engine_bore_in: String
        model_engine_stroke_in: String
        model_engine_valves: Int
        model_engine_power_hp: Int
        model_engine_power_kw: Int
        model_engine_torque_lbft: Int
        model_engine_torque_kgm: Int
        model_top_speed_mph: String
        model_weight_lbs: String
        model_length_in: String
        model_width_in: String
        model_height_in: String
        model_wheelbase_in: String
        model_mpg_hwy:Int
        model_mpg_city: Int
        model_mpg_mixed:Int
        model_fuel_cap_g: Int
        make_display: String
        make_country: String
        ExtColors: [String],
        IntColors: [String]
    }

    type Query{
        current: User
        getAllUsers: [User]
        getAllCars: [Car]
        getCarsByYear(year: Int!): [Car]
        getCarsByBrand(brand: String!): [Car]
    }

    type Mutation{
        register(userName: String!, name: String!, password: String!): String
        login(username: String!, password: String!): String
        
    }

`

module.exports = typeDefs;
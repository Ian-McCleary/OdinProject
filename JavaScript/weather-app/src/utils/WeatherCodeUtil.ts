
/** Get the english description of the weather based on the offical weather code
 * https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM
 */
function getWeatherDescriptionFromCode(code: number): string {
    if (code < 20) {
        return "Clear"
    } else if (code < 30) {
        return "Precipitation"
    } else if (code < 40) {
        return "Dusty"
    } else if (code < 50) {
        return "Fog or ice"
    } else if (code < 60) {
        return "Drizzle"
    } else if (code < 70) {
        return "Snow"
    } else if (code < 80) {
        return "Rain Showers"
    } else if (code < 90) {
        return "Thunderstorm"
    }
    return "Unknown"
}

function getWeatherImageFromCode(code: number): string {
    if (code < 20) {
        return "https://th.bing.com/th/id/OIP.YYYhW_qvySbr5FWKUrSyzQAAAA?rs=1&pid=ImgDetMain"
    } else if (code < 30) {
        return "https://th.bing.com/th/id/OIP.KA1oVQqjTg1S0YtOmFpu6AHaEn?rs=1&pid=ImgDetMain"
    } else if (code < 40) {
        return "https://images.freecreatives.com/wp-content/uploads/2015/04/dust-storm-sepia1.jpg"
    } else if (code < 50) {
        return "https://th.bing.com/th/id/OIP.vmwQkHr3w0DHdGMGFrMhPgHaFx?rs=1&pid=ImgDetMain"
    } else if (code < 60) {
        return "https://th.bing.com/th/id/OIP.o6UReOuvbIamLfkxduATyQAAAA?rs=1&pid=ImgDetMain"
    } else if (code < 70) {
        return "https://th.bing.com/th/id/OIP.FDt_CU571nU763aZKdV1XwHaEK?rs=1&pid=ImgDetMain"
    } else if (code < 80) {
        return "https://www.gannett-cdn.com/-mm-/ec97db89cd91c31507534edde6ce9a20dc98ef64/c=0-33-680-417/local/-/media/2015/10/25/JacksonMS/JacksonMS/635813795612345451-Heavy-Rain-iStock-680x451.jpg?width=3200&height=1680&fit=crop"
    } else if (code < 90) {
        return "https://th.bing.com/th/id/R.eb990257fa814e8dda3266f29bf4f114?rik=J2s2kclYRBbGrg&pid=ImgRaw&r=0"
    }
    return "https://th.bing.com/th/id/OIP.Z3aHkVh8w_VJdHzE032frgAAAA?rs=1&pid=ImgDetMain"
}

export {getWeatherDescriptionFromCode, getWeatherImageFromCode}
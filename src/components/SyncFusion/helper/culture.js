import { loadCldr } from '@syncfusion/ej2-base';
// arabic
// import arGeneric from 'cldr-data/main/ar/ca-generic.json';
// import arGregorian from 'cldr-data/main/ar/ca-gregorian.json';
// import arNumbers from 'cldr-data/main/ar/numbers.json';
// import arTimeZoneNames from 'cldr-data/main/ar/timeZoneNames.json';
// french
import frGeneric from 'cldr-data/main/fr/ca-generic.json';
import frGregorian from 'cldr-data/main/fr/ca-gregorian.json';
import frNumbers from 'cldr-data/main/fr/numbers.json';
import frTimeZoneNames from 'cldr-data/main/fr/timeZoneNames.json';
// supplemental
import numberingSystems from 'cldr-data/supplemental/numberingSystems.json';

export function loadCulture(lang) {
    switch (lang) {
        // there is an issue with showing the arabic days in gantt chart that is stopping us
        // from having full arabic translation at the moment
        // i opened a ticket on sync fusion forum and hopefully they will reach back with a solution
        // https://www.syncfusion.com/forums/185396/issue-with-arabic-gloabalization-for-gantt-chart
        // when they do we can uncomment the code below to have full numbers/dates/days
        // translation within sync fusion components
        // case 'ar':
        //     loadCldr(
        //         arGregorian,
        //         arNumbers,
        //         arTimeZoneNames,
        //         arGeneric,
        //         numberingSystems
        //     );
        //     break;
        case 'fr':
            loadCldr(
                frGregorian,
                frNumbers,
                frTimeZoneNames,
                frGeneric,
                numberingSystems
            );
            break;
        default:
            return;
    }
}

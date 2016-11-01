import {
  CLOSE_FILTERS_DRAWER,
  OPEN_FILTERS_DRAWER,
  FETCH_FILTERS,
  SELECT_FILTER,
  REMOVE_FILTER,
} from './filterActionTypes';

export function openFiltersDrawer() {
  return {
    type: OPEN_FILTERS_DRAWER,
  };
}

export function closeFiltersDrawer() {
  return {
    type: CLOSE_FILTERS_DRAWER,
  };
}

/**
 * Returns an action where the payload is the list of available filters.
 * The filter object has a form of:
 * {
 *  id: string - The id of the filter,
 *  shortName: string - Short version of the name, used when the selected option is too long
 *  longName: string - Long version of the name, is displayed by default.
 *  options: Array - The different options available for the filter.
 * }
 * A filter option object has the form: { value: string, name: string }
 */
export function fetchFilters() {
  return {
    type: FETCH_FILTERS,
    payload: [
      {
        id: 'year',
        shortName: 'Year',
        longName: 'Year',
        options: [
          {
            value: '2012',
            name: '2012',
          },
          {
            value: '2013',
            name: '2014',
          },
          {
            value: '2014',
            name: '2014',
          },
          {
            value: '2015',
            name: '2015',
          },
        ],
      },
      {
        id: 'factors',
        shortName: 'C.F',
        longName: 'Contributing Factors',
        options: [
          {
            value: 'none',
            name: 'None',
          },
          {
            value: 'distraction',
            name: 'Driver distracted',
          },
          {
            value: 'intoxication',
            name: 'Driver Intoxicated',
          },
          {
            value: 'lost_control',
            name: 'Driver lost control',
          },
          {
            value: 'changing_lanes',
            name: 'Vehicle changing lanes',
          },
          {
            value: 'enter_leave_highway',
            name: 'Vehicle entering/leaving highway',
          },
          {
            value: 'slowing_stoping',
            name: 'Slowing/stoping vehicle',
          },
          {
            value: 'swerving',
            name: 'Vehicle swerving',
          },
          {
            value: 'overtaking',
            name: 'Vehicle overtaking',
          },
          {
            value: 'bus',
            name: 'Public bus/School bus related',
          },
        ],
      },
      {
        id: 'severity',
        shortName: 'Severity',
        longName: 'Severity',
        options: [
          {
            value: 'none',
            name: 'None',
          },
          {
            value: 'not_injured',
            name: 'Not Injured',
          },
          {
            value: 'minor_injury',
            name: 'Minor Injury',
          },
          {
            value: 'serious_injury',
            name: 'Serious Injury',
          },
          {
            value: 'Death',
            name: 'Death',
          },
        ],
      },
      {
        id: 'vehicle',
        shortName: 'V.I',
        longName: 'Vehicle',
        options: [
          {
            value: 'none',
            name: 'None',
          },
          {
            value: 'passenger_car',
            name: 'Passenger car',
          },
          {
            value: 'sport_vehicle',
            name: 'Sport utility vehicle',
          },
          {
            value: 'pickup',
            name: 'Pickup',
          },
          {
            value: 'van',
            name: 'Van',
          },
          {
            value: 'truck',
            name: 'Truck',
          },
          {
            value: 'police_vehicle',
            name: 'Police vehicle',
          },
          {
            value: 'ambulance',
            name: 'Ambulance',
          },
          {
            value: 'bus',
            name: 'Public bus/School bus',
          },
          {
            value: 'motorcycle',
            name: 'Motorcycle',
          },
          {
            value: 'bicycle',
            name: 'Bicycle',
          },
        ],
      },
      {
        id: 'weather',
        shortName: 'Weather',
        longName: 'Weather',
        options: [
          {
            value: 'none',
            name: 'None',
          },
          {
            value: 'clear',
            name: 'Clear',
          },
          {
            value: 'rain',
            name: 'Rain',
          },
          {
            value: 'fog',
            name: 'Fog',
          },
          {
            value: 'wind',
            name: 'Wind',
          },
          {
            value: 'ice',
            name: 'Ice',
          },
          {
            value: 'snow',
            name: 'Snow',
          },
        ],
      },
    ],
  };
}

/**
 * Takes an object filter with the form { id: string, value: string }
 * where id is the id of the filter group and value is the value of
 * the selected option, and adds it to the selected filters object.
 * @param {Object} filter - selected filter object.
 * @returns {Object}
 */
export function selectFilter(filter) {
  return {
    type: SELECT_FILTER,
    payload: filter,
  };
}

/**
 * Dispatches a REMOVE_FILTER action with the id of the filter to be deleted..
 * @param {string} filterId - Id of the filter to be deleted.
 */
export function deleteFilter(filterId) {
  return {
    type: REMOVE_FILTER,
    payload: filterId,
  };
}
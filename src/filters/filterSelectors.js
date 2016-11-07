import { createSelector } from 'reselect';
import filter from 'lodash/filter';
import has from 'lodash/has';

const filterGroupSelector = state => state.filters.all;
const selectedFilterIds = state => state.filters.selected;

const getFilters = (filterGroups, selectedIds) => {
  const selectedFilterGroups = filter(
    filterGroups,
    group => has(selectedIds, group.id));
  return selectedFilterGroups.map((group) => (
    {
      id: group.id,
      icon: group.icon,
      longName: group.longName,
      selectedOption: group.options.find(option => option.value === selectedIds[group.id]),
    }
  ));
};

/**
 * Returns a formatted list of the filter groups that have a selected option.
 */
export const selectedFiltersSelector = createSelector(
  filterGroupSelector,
  selectedFilterIds,
  getFilters
);

/**
 * Returns the selected option object of a given filter group.
 * @param {string} filterId - Id of the filter group.
 */
export const selectedOptionSelector = (filterId) => createSelector(
    state => state.filters.all.find(group => group.id === filterId),
    selectedFilterIds,
    (group, filters) => group.options.find(option => option.value === filters[group.id])
);

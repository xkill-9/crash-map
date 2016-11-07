import { createSelector } from 'reselect';
import filter from 'lodash/filter';
import has from 'lodash/has';
import pick from 'lodash/pick';

// [ {id, options} ]
const filterGroupSelector = state => state.filters.all;
// { [id]: value }
const selectedFilterIds = state => state.filters.selected;

const getFilters = (filterGroups, selectedIds) => {
  const selectedFilterGroups = filter(
    filterGroups,
    group => has(selectedIds, group.id));
  return selectedFilterGroups.map((group) => {
    const selectedOption = group.options.find(
      option => option.value === selectedIds[group.id]
    );
    return { ...pick(group, ['id', 'icon', 'longName']), selectedOption };
  });
};

export const selectedFiltersSelector = createSelector(
  filterGroupSelector,
  selectedFilterIds,
  getFilters
);

export const currentFilterSelector = (filterId) => createSelector(
    selectedFiltersSelector,
    filters => filters.find(item => item.id === filterId)
);

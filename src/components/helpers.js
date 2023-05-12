export const getStatusStyle = (status, receivedStatus) => {
    if (receivedStatus && receivedStatus.includes(status)) {
      return { background: '#ffcc80' }; // Highlight the cell
    } else {
      return { background: 'transparent' }; // Keep the cell unchanged
    }
  };
  
  export const getStatuses = (statusData, rowIndex) => {
    const statuses = {};
    for (const [key, value] of Object.entries(statusData)) {
      if (value[rowIndex] !== '') {
        statuses[key] = value[rowIndex];
      }
    }
    return statuses;
  };
  
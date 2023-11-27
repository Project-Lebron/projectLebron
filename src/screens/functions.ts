export function convertToISO8601(dateStr: string): string {
    const parts = dateStr.match(/(\w+) (\w+) (\d+) (\d+):(\d+):(\d+) (\d+)/);
    if (!parts) {
        throw new Error('Invalid date format');
    }

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthIndex = monthNames.indexOf(parts[2]);
    const month = monthIndex >= 0 ? (monthIndex + 1).toString().padStart(2, '0') : '00';

    return `${parts[7]}-${month}-${parts[3]}T${parts[4]}:${parts[5]}:${parts[6]}Z`;
  }

export function formatDate(inputDateStr: string): string {
    // Define the month names
    const monthNames: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Split the input date string into components
    const parts: string[] = inputDateStr.split(' ');

    // Extract the components of the date
    const year: string = parts[parts.length - 1]; // Year is the last part of the string
    const monthIndex: number = monthNames.indexOf(parts[1]);
    const day: string = parts[2];

    // Zero-pad the day and month if necessary
    const formattedDay: string = day.padStart(2, '0');
    const formattedMonth: string = (monthIndex + 1).toString().padStart(2, '0'); // +1 because months are 0-indexed

    // Return the formatted date in "DD.MM.YYYY" format
    return `${formattedDay}.${formattedMonth}.${year}`;
}

export function isDateInPastWeek(dateStr: string): boolean {
    try {
        const isoDateStr = convertToISO8601(dateStr);
        const date = new Date(isoDateStr);

        const currentDate = new Date();
        const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
        return date >= oneWeekAgo && date <= currentDate;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export function formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
  
    // Padding single digits with '0' for consistent formatting
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
  
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  // Define an async function to fetch JSON data
export async function fetchJsonData(url: string): Promise<any> {
    try {
        // Fetch data from the provided URL
        const response = await fetch(url);
        // Parse the response as JSON
        const data = await response.json();
        return data;
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error fetching data:', error);
        throw error;
    }
  }
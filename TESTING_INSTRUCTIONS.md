# Testing Default Light Mode

## To test that the website defaults to light mode on first visit:

### Method 1: Clear localStorage (Simulates first-time visitor)
1. Open browser developer tools (F12)
2. Go to Console tab
3. Run this command:
   ```javascript
   localStorage.clear(); location.reload();
   ```

### Method 2: Use Incognito/Private Mode
1. Open an incognito/private browser window
2. Navigate to http://localhost:3000
3. Should load in light mode by default

### Method 3: Clear Site Data
1. Open browser developer tools (F12)
2. Go to Application tab (Chrome) or Storage tab (Firefox)
3. Find "Local Storage" in the left sidebar
4. Delete the "theme" entry
5. Refresh the page

## Expected Behavior:
- Website loads in **light mode** by default
- Moon icon (🌙) is visible in the navbar
- All text appears in dark colors on white background
- User can then click the moon to switch to dark mode

## Theme Persistence:
- Once user selects a theme, it will be remembered
- Next visit will use their saved preference
- Only first-time visitors see light mode by default

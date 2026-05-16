// Define a simple structure for our game hub
interface GamePortal {
    title: string;
    url: string;
    containerId: string;
}

class GnMathLoader {
    private config: GamePortal;

    constructor(config: GamePortal) {
        this.config = config;
    }

    public render(): void {
        const container = document.getElementById(this.config.containerId);
        
        if (!container) {
            console.error("Target container not found!");
            return;
        }

        // Create the iframe to embed GN-Math
        const frame = document.createElement('iframe');
        frame.src = this.config.url;
        frame.title = this.config.title;
        
        // Style it to fill the screen for gaming
        frame.style.width = '100%';
        frame.style.height = '100vh';
        frame.style.border = 'none';
        
        // Add it to your webpage
        container.appendChild(frame);
    }
}

// Initialize the GN-Math portal
const gnMath = new GnMathLoader({
    title: "GN-Math Unblocked Games",
    url: "
      https://gn-math.dev/
", // Official GN-Math domain
    containerId: "game-viewport"
});

// Run the loader when the window is ready
window.addEventListener('DOMContentLoaded', () => {
    gnMath.render();
});
", // Official GN-Math domain
    containerId: "game-viewport"
});

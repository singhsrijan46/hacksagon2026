import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
    // refs for all the cards
    const cardRefs = useRef([]);

    // when mouse moves over a card, rotate the glow effect
    const handleMouseMove = (index) => (e) => {
        // get the current card
        const card = cardRefs.current[index];
        if (!card) return;

        // get the mouse position relative to the card
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        // calculate the angle from the center of the card to the mouse
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

        // adjust the angle so that it's between 0 and 360
        angle = (angle + 360) % 360;

        // set the angle as a CSS variable
        card.style.setProperty("--start", angle + 60);
    };

    // return the card component with the mouse move event
    return (
        <div
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-[#1a0b2e]/60 p-10 mb-5 break-inside-avoid-column backdrop-blur-sm transition-all duration-300 hover:border-white/20"
        >
            <div className="glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(139, 92, 246, 0.15), transparent 50%)` }}></div>
            {children}
        </div>
    );
};

export default GlowCard;

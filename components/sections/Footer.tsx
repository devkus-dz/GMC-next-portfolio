"use client"
export default function Footer(){
    return (
        <footer className="footer sm:footer-horizontal text-neutral-content p-4 bg-base-100">
            <div className="w-full flex justify-center">
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
    </footer>
    );
}
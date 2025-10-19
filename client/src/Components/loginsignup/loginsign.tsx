import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import "./loginsign.css";

interface LoginSignupProps {
    show: boolean;
    onClose: () => void;
}

const LoginSignup = ({ show, onClose }: LoginSignupProps) => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === "Escape" && show) onClose();
        };
        document.addEventListener("keydown", handleEscKey);
        return () => document.removeEventListener("keydown", handleEscKey);
    }, [show, onClose]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/users/${isLoginMode ? "login" : "signup"}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    password,
                    ...(isLoginMode ? {} : { firstName, lastName }),
                }),
            });
            if (response.ok) {
                onClose();
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };


    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
            });
            const userInfo = await res.json();
            console.log(userInfo);
        },
        onError: () => console.log("Login Failed"),
    });


    return createPortal(
        <AnimatePresence mode="wait">
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="modal-overlay"
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ opacity: 0, y: -50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* header */}
                        <motion.div
                            className="modal-header"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <motion.button
                                className="close-button"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={onClose}
                            >
                                <IoClose />
                            </motion.button>
                            <motion.h3
                                className="font-[Inter]"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {isLoginMode ? "Log in" : "Sign up"}
                            </motion.h3>
                        </motion.div>

                        {/* body */}
                        <motion.div
                            className="modal-body"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.h2
                                className="font-[Inter]"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Welcome to Tork
                            </motion.h2>

                            <motion.form
                                onSubmit={handleSubmit}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <AnimatePresence mode="wait">
                                    {!isLoginMode && (
                                        <motion.div
                                            className="name-inputs"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="input-group">
                                                <motion.input
                                                    whileFocus={{ scale: 1.02 }}
                                                    type="text"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    placeholder="First name"
                                                    required
                                                />
                                            </div>
                                            <div className="input-group">
                                                <motion.input
                                                    whileFocus={{ scale: 1.02 }}
                                                    type="text"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    placeholder="Last name"
                                                    required
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="input-group">
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        required
                                    />
                                </div>

                                <div className="input-group">
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        required
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="submit-button"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isLoginMode ? "Log in" : "Sign up"}
                                </motion.button>
                            </motion.form>

                            <motion.div
                                className="divider"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <span>or</span>
                            </motion.div>

                            {/* ✅ Custom Google Login button */}
                            <motion.div
                                className="social-login"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <motion.button
                                    onClick={() => googleLogin()}
                                    className="social-button google flex items-center justify-center gap-3 py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition font-[Inter]"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <FcGoogle className="text-2xl" />
                                    Continue with Google
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* footer */}
                        <motion.div
                            className="modal-footer"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <p>
                                {isLoginMode ? "Don't have an account? " : "Already have an account? "}
                                <motion.button
                                    className="switch-mode"
                                    onClick={() => setIsLoginMode(!isLoginMode)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isLoginMode ? "Sign up" : "Log in"}
                                </motion.button>
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.getElementById("root") as HTMLElement
    );
};

export default LoginSignup;

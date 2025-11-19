
import { useState } from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { Button, Input, Checkbox, message } from "antd";
import { COLORS } from "../../theme/colors"; 

export default function LoginScreen() {
    const [darkMode, setDarkMode] = useState(false);
    const [form, setForm] = useState({ email: "", password: "", remember: false });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleLogin = () => {
        if (!form.email || !form.password) {
            message.error("Please fill in all fields!");
            return;
        }
        message.success(`Logged in as ${form.email}`);
    };

    const theme = darkMode ? COLORS.dark : COLORS.light;

    return (
        <div
            className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300`}
            style={{ backgroundColor: theme.bgPage }}
        >
            <div
                className="w-full max-w-md p-8 rounded-2xl shadow-xl"
                style={{ backgroundColor: theme.bgCard }}
            >
                <div className="mb-6 text-center">
                    <h1
                        className="text-3xl font-bold mb-2"
                        style={{ color: theme.textHeading }}
                    >
                        Welcome Back
                    </h1>
                    <p className="text-sm" style={{ color: theme.textPara }}>
                        Please login to your account
                    </p>
                </div>

                {/* Email */}
                <div className="mb-4 relative">
                    <AiOutlineUser
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                    />
                    <Input
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleInputChange}
                        className="pl-10 rounded-lg"
                    />
                </div>

                {/* Password */}
                <div className="mb-4 relative">
                    <AiOutlineLock
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                    />
                    <Input.Password
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleInputChange}
                        className="pl-10 rounded-lg"
                    />
                </div>

                {/* Remember Me */}
                <div className="mb-6 flex justify-between items-center">
                    <Checkbox
                        name="remember"
                        checked={form.remember}
                        onChange={handleInputChange}
                        style={{ color: theme.textPara }}
                    >
                        Remember Me
                    </Checkbox>
                    <Button type="link" style={{ color: theme.btnSecondary }}>
                        Forgot Password?
                    </Button>
                </div>

                {/* Login Button */}
                <Button
                    block
                    size="large"
                    onClick={handleLogin}
                    style={{
                        backgroundColor: theme.btnPrimary,
                        color: theme.btnPrimaryText,
                        fontWeight: 600,
                    }}
                >
                    Login
                </Button>

                {/* Dark Mode Toggle */}
                <div className="mt-4 text-center">
                    <Button
                        type="default"
                        size="small"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        Toggle {darkMode ? "Light" : "Dark"} Mode
                    </Button>
                </div>
            </div>
        </div>
    );
}

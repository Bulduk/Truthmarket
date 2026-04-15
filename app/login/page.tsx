'use client';

import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import { Mail, Lock, Wallet, ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 pb-24 md:pb-8">
      <div className="w-full max-w-md">
        {/* Logo / Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fcd535] to-[#f0b90b] mb-4 shadow-[0_0_30px_rgba(252,213,53,0.3)]">
            <span className="text-3xl font-black text-[#1e2329]">T</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to TruthMarket to continue</p>
        </div>

        {/* Login Card */}
        <div className="glass rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#fcd535]/20 rounded-full blur-3xl" />
          
          <div className="space-y-6 relative z-10">
            {/* Web3 Login */}
            <Button 
              variant="secondary" 
              className="w-full h-12 bg-[#131720] hover:bg-[#1e2329] border border-white/5"
              leftIcon={<Wallet className="w-5 h-5 text-[#fcd535]" />}
            >
              Continue with Wallet
            </Button>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Or email</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Email Form */}
            <form className="space-y-4">
              <Input 
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                leftIcon={<Mail className="w-5 h-5" />}
              />
              <div className="space-y-1">
                <Input 
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  leftIcon={<Lock className="w-5 h-5" />}
                />
                <div className="flex justify-end">
                  <Link href="/forgot-password" className="text-xs text-[#fcd535] hover:text-[#f0b90b] transition-colors">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <Button className="w-full mt-2" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Sign In
              </Button>
            </form>

            {/* Social Logins */}
            <div className="pt-4 border-t border-white/10 flex gap-3">
              <Button variant="ghost" className="flex-1 bg-white/5">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" className="flex-1 bg-white/5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Don't have an account?{' '}
          <Link href="/register" className="text-[#fcd535] hover:text-[#f0b90b] font-bold transition-colors">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

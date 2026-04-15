'use client';

import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import { Mail, Lock, User, ArrowRight, Wallet, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 pb-24 md:pb-8 mt-8">
      <div className="w-full max-w-md">
        {/* Logo / Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fcd535] to-[#f0b90b] mb-4 shadow-[0_0_30px_rgba(252,213,53,0.3)]">
            <span className="text-3xl font-black text-[#1e2329]">T</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Join TruthMarket</h1>
          <p className="text-gray-400">Create an account to start trading predictions</p>
        </div>

        {/* Register Card */}
        <div className="glass rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#fcd535]/20 rounded-full blur-3xl" />
          
          <div className="space-y-6 relative z-10">
            {/* Fast Onboarding */}
            <Button 
              variant="secondary" 
              className="w-full h-12 bg-[#131720] hover:bg-[#1e2329] border border-white/5"
              leftIcon={<Wallet className="w-5 h-5 text-[#fcd535]" />}
            >
              Connect Wallet (Recommended)
            </Button>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Or register with email</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Email Form */}
            <form className="space-y-4">
              <Input 
                label="Username"
                type="text"
                placeholder="Choose a username"
                leftIcon={<User className="w-5 h-5" />}
              />
              <Input 
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                leftIcon={<Mail className="w-5 h-5" />}
              />
              <Input 
                label="Password"
                type="password"
                placeholder="Create a strong password"
                leftIcon={<Lock className="w-5 h-5" />}
              />

              <div className="flex items-start gap-3 mt-4">
                <div className="mt-1">
                  <ShieldCheck className="w-5 h-5 text-[#0ecb81]" />
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  By creating an account, you agree to our <Link href="/terms" className="text-[#fcd535] hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-[#fcd535] hover:underline">Privacy Policy</Link>.
                </p>
              </div>

              <Button className="w-full mt-4" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Create Account
              </Button>
            </form>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Already have an account?{' '}
          <Link href="/login" className="text-[#fcd535] hover:text-[#f0b90b] font-bold transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

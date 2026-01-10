import React, {useState} from 'react'
import {Switch} from "@/components/ui/switch";
import {Badge} from "@/components/ui/badge";
import {Check, X} from "lucide-react";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const PricingSection = () => {
    const [billingAnnual, setBillingAnnual] = useState(true);

    return (
        <section className="py-24 px-6 bg-muted/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Simple, transparent pricing</h2>
                    <p className="text-xl text-muted-foreground">Everything you need to organize your mind — choose
                        the perfect plan</p>
                </div>

                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className="text-lg font-medium">Monthly</span>
                    <Switch checked={billingAnnual} onCheckedChange={setBillingAnnual}/>
                    <span className="text-lg font-medium">
                            Annual <Badge variant="secondary" className="ml-2">Save 20%</Badge>
                        </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3 order-1 lg:order-2">
                        <div
                            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-background">
                            <table className="w-full">
                                <thead>
                                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                                    <th className="text-left p-8 font-semibold text-lg">Features</th>
                                    <th className="text-center p-8 font-semibold">Free</th>
                                    <th className="text-center p-8 font-semibold text-primary">Pro</th>
                                    <th className="text-center p-8 font-semibold">Team</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                                {[
                                    {feature: "Unlimited notes & pages", free: true, pro: true, team: true},
                                    {feature: "Basic databases", free: true, pro: true, team: true},
                                    {feature: "Offline access", free: true, pro: true, team: true},
                                    {
                                        feature: "Advanced databases (relations, formulas)",
                                        free: false,
                                        pro: true,
                                        team: true
                                    },
                                    {feature: "AI writing & summarization", free: false, pro: true, team: true},
                                    {feature: "Custom themes & icons", free: false, pro: true, team: true},
                                    {feature: "Priority support", free: false, pro: true, team: true},
                                    {feature: "Team collaboration", free: false, pro: false, team: true},
                                    {feature: "Admin controls & permissions", free: false, pro: false, team: true},
                                    {feature: "Shared team templates", free: false, pro: false, team: true},
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                                        <td className="p-8 text-foreground/90">{row.feature}</td>
                                        <td className="text-center p-8">
                                            {row.free ? <Check className="h-6 w-6 text-green-500 mx-auto"/> :
                                                <X className="h-6 w-6 text-muted-foreground/50 mx-auto"/>}
                                        </td>
                                        <td className="text-center p-8">
                                            {row.pro ? <Check className="h-6 w-6 text-primary mx-auto"/> :
                                                <X className="h-6 w-6 text-muted-foreground/50 mx-auto"/>}
                                        </td>
                                        <td className="text-center p-8">
                                            {row.team ? <Check className="h-6 w-6 text-foreground mx-auto"/> :
                                                <X className="h-6 w-6 text-muted-foreground/50 mx-auto"/>}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                                <tfoot>
                                <tr className="bg-muted/40">
                                    <td className="p-8 font-semibold">Price per month</td>
                                    <td className="text-center p-8 text-2xl font-bold">$0</td>
                                    <td className="text-center p-8 text-3xl font-bold text-primary">
                                        ${billingAnnual ? "96" : "12"}
                                        {billingAnnual &&
                                            <span className="text-sm font-normal text-muted-foreground block">billed annually</span>}
                                    </td>
                                    <td className="text-center p-8 text-2xl font-bold">
                                        ${billingAnnual ? "240" : "25"}
                                        <span className="text-sm block text-muted-foreground">per user</span>
                                        {billingAnnual &&
                                            <span className="text-sm font-normal text-muted-foreground block">billed annually</span>}
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    {/* Highlighted Pro Offer Card */}
                    <div className="lg:col-span-1 order-2 lg:order-1">
                        <Card className="h-full border-2 border-primary shadow-2xl relative overflow-hidden">
                            <div
                                className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-3 font-semibold">
                                Best Offer
                            </div>
                            <div className="pt-16 pb-10 px-8 text-center">
                                <h3 className="text-3xl font-bold mb-2">Pro Plan</h3>
                                <div className="my-8">
                                        <span className="text-5xl font-bold">
                                            ${billingAnnual ? "96" : "12"}
                                        </span>
                                    <span className="text-muted-foreground ml-2">/month</span>
                                    {billingAnnual && (
                                        <p className="text-sm text-muted-foreground mt-2">
                                            <s>$144</s> → <span
                                            className="text-primary font-bold">Save $48/year</span>
                                        </p>
                                    )}
                                </div>
                                <ul className="space-y-4 text-left mb-10">
                                    <li className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0"/>
                                        <span>Everything in Free</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0"/>
                                        <span>AI writing & summaries</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0"/>
                                        <span>Advanced databases</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0"/>
                                        <span>Custom themes</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0"/>
                                        <span>Priority support</span>
                                    </li>
                                </ul>
                                <Button size="lg" className="w-full text-lg py-7">
                                    Get Pro Now
                                </Button>
                                <p className="text-xs text-muted-foreground mt-6">
                                    14-day free trial • No card required
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default PricingSection

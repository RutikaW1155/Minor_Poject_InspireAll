import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Search } from "lucide-react";
import "./SchemeSearchForm.css";

// Adjust this import based on your actual server/API setup
import { getGovernmentSchemeRecommendations } from "./getGovernmentSchemeRecommendations";

const schemeSearchSchema = z.object({
  businessType: z.string().min(3, "Business type must be at least 3 characters."),
  location: z.string().min(3, "Location must be at least 3 characters."),
});

export default function SchemeSearchForm({ onResults, onLoading, toast }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schemeSearchSchema),
    defaultValues: {
      businessType: "",
      location: "",
    },
  });

  const onSubmit = async (values) => {
    onLoading(true);
    onResults(null);
    try {
      const result = await getGovernmentSchemeRecommendations(values);
      if (result?.schemes?.length) {
        onResults(result.schemes);
        toast?.({
          title: "Schemes Found",
          description: `Found ${result.schemes.length} relevant schemes.`,
        });
      } else {
        onResults([]);
        toast?.({
          title: "No Schemes Found",
          description: "Could not find schemes for the given criteria.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error fetching scheme recommendations:", error);
      onResults([]);
      toast?.({
        title: "Error",
        description: "Failed to fetch scheme recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      onLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Find Relevant Schemes</h2>
        <p className="card-description">
          Enter your business type and location to discover government schemes that can support you.
        </p>
      </div>
      <div className="card-content">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form-grid">
            <div className="form-item">
              <label className="form-label">Type of Business</label>
              <input
                type="text"
                placeholder="e.g., Handicrafts, Agriculture, Retail"
                {...register("businessType")}
                className="form-input"
              />
              <p className="form-description">Describe your primary business activity.</p>
              {errors.businessType && <p className="form-error">{errors.businessType.message}</p>}
            </div>
            <div className="form-item">
              <label className="form-label">Business Location</label>
              <input
                type="text"
                placeholder="e.g., Jaipur, Rajasthan"
                {...register("location")}
                className="form-input"
              />
              <p className="form-description">Specify village/town, district, and state.</p>
              {errors.location && <p className="form-error">{errors.location.message}</p>}
            </div>
          </div>
          <button type="submit" className="form-button" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="icon spin" /> Searching...
              </>
            ) : (
              <>
                <Search className="icon" /> Find Schemes
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

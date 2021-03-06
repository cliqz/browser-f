/*
 * Copyright 2019 Google LLC
 *
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/**************************************************************************************************
 *** This file was autogenerated from GrSaturateProcessor.fp; do not modify.
 **************************************************************************************************/
#include "GrSaturateProcessor.h"

#include "include/gpu/GrTexture.h"
#include "src/gpu/glsl/GrGLSLFragmentProcessor.h"
#include "src/gpu/glsl/GrGLSLFragmentShaderBuilder.h"
#include "src/gpu/glsl/GrGLSLProgramBuilder.h"
#include "src/sksl/SkSLCPP.h"
#include "src/sksl/SkSLUtil.h"
class GrGLSLSaturateProcessor : public GrGLSLFragmentProcessor {
public:
    GrGLSLSaturateProcessor() {}
    void emitCode(EmitArgs& args) override {
        GrGLSLFPFragmentBuilder* fragBuilder = args.fFragBuilder;
        const GrSaturateProcessor& _outer = args.fFp.cast<GrSaturateProcessor>();
        (void)_outer;
        fragBuilder->codeAppendf("%s = clamp(%s, 0.0, 1.0);\n", args.fOutputColor,
                                 args.fInputColor);
    }

private:
    void onSetData(const GrGLSLProgramDataManager& pdman,
                   const GrFragmentProcessor& _proc) override {}
};
GrGLSLFragmentProcessor* GrSaturateProcessor::onCreateGLSLInstance() const {
    return new GrGLSLSaturateProcessor();
}
void GrSaturateProcessor::onGetGLSLProcessorKey(const GrShaderCaps& caps,
                                                GrProcessorKeyBuilder* b) const {}
bool GrSaturateProcessor::onIsEqual(const GrFragmentProcessor& other) const {
    const GrSaturateProcessor& that = other.cast<GrSaturateProcessor>();
    (void)that;
    return true;
}
GrSaturateProcessor::GrSaturateProcessor(const GrSaturateProcessor& src)
        : INHERITED(kGrSaturateProcessor_ClassID, src.optimizationFlags()) {}
std::unique_ptr<GrFragmentProcessor> GrSaturateProcessor::clone() const {
    return std::unique_ptr<GrFragmentProcessor>(new GrSaturateProcessor(*this));
}
GR_DEFINE_FRAGMENT_PROCESSOR_TEST(GrSaturateProcessor);
#if GR_TEST_UTILS
std::unique_ptr<GrFragmentProcessor> GrSaturateProcessor::TestCreate(GrProcessorTestData* d) {
    return GrSaturateProcessor::Make();
}
#endif

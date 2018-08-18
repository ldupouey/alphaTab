﻿namespace AlphaTab.Audio.Synth.Sf2
{
    enum GeneratorEnum
    {
        StartAddressOffset = 0,
        EndAddressOffset = 1,
        StartLoopAddressOffset = 2,
        EndLoopAddressOffset = 3,
        StartAddressCoarseOffset = 4,
        ModulationLFOToPitch = 5,
        VibratoLFOToPitch = 6,
        ModulationEnvelopeToPitch = 7,
        InitialFilterCutoffFrequency = 8,
        InitialFilterQ = 9,
        ModulationLFOToFilterCutoffFrequency = 10,
        ModulationEnvelopeToFilterCutoffFrequency = 11,
        EndAddressCoarseOffset = 12,
        ModulationLFOToVolume = 13,
        Unused1 = 14,
        ChorusEffectsSend = 15,
        ReverbEffectsSend = 16,
        Pan = 17,
        Unused2 = 18,
        Unused3 = 19,
        Unused4 = 20,
        DelayModulationLFO = 21,
        FrequencyModulationLFO = 22,
        DelayVibratoLFO = 23,
        FrequencyVibratoLFO = 24,
        DelayModulationEnvelope = 25,
        AttackModulationEnvelope = 26,
        HoldModulationEnvelope = 27,
        DecayModulationEnvelope = 28,
        SustainModulationEnvelope = 29,
        ReleaseModulationEnvelope = 30,
        KeyNumberToModulationEnvelopeHold = 31,
        KeyNumberToModulationEnvelopeDecay = 32,
        DelayVolumeEnvelope = 33,
        AttackVolumeEnvelope = 34,
        HoldVolumeEnvelope = 35,
        DecayVolumeEnvelope = 36,
        SustainVolumeEnvelope = 37,
        ReleaseVolumeEnvelope = 38,
        KeyNumberToVolumeEnvelopeHold = 39,
        KeyNumberToVolumeEnvelopeDecay = 40,
        Instrument = 41,
        Reserved1 = 42,
        KeyRange = 43,
        VelocityRange = 44,
        StartLoopAddressCoarseOffset = 45,
        KeyNumber = 46,
        Velocity = 47,
        InitialAttenuation = 48,
        Reserved2 = 49,
        EndLoopAddressCoarseOffset = 50,
        CoarseTune = 51,
        FineTune = 52,
        SampleID = 53,
        SampleModes = 54,
        Reserved3 = 55,
        ScaleTuning = 56,
        ExclusiveClass = 57,
        OverridingRootKey = 58,
        Unused5 = 59,
        UnusedEnd = 60
    }
}
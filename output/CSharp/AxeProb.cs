// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: proto/Spec/AxeProb.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Lumber.Spec {

  /// <summary>Holder for reflection information generated from proto/Spec/AxeProb.proto</summary>
  public static partial class AxeProbReflection {

    #region Descriptor
    /// <summary>File descriptor for proto/Spec/AxeProb.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static AxeProbReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Chhwcm90by9TcGVjL0F4ZVByb2IucHJvdG8SC2x1bWJlci5TcGVjIlIKB0F4",
            "ZVByb2ISEQoJQXhlX0xldmVsGAEgASgFEhAKCEF4ZV9UeXBlGAIgASgFEhAK",
            "CEF4ZV9Qcm9iGAMgAygFEhAKCFByb3BfSWRzGAQgAygFYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Lumber.Spec.AxeProb), global::Lumber.Spec.AxeProb.Parser, new[]{ "AxeLevel", "AxeType", "AxeProb_", "PropIds" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  [global::System.Diagnostics.DebuggerDisplayAttribute("{ToString(),nq}")]
  public sealed partial class AxeProb : pb::IMessage<AxeProb>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<AxeProb> _parser = new pb::MessageParser<AxeProb>(() => new AxeProb());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<AxeProb> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Lumber.Spec.AxeProbReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public AxeProb() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public AxeProb(AxeProb other) : this() {
      axeLevel_ = other.axeLevel_;
      axeType_ = other.axeType_;
      axeProb_ = other.axeProb_.Clone();
      propIds_ = other.propIds_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public AxeProb Clone() {
      return new AxeProb(this);
    }

    /// <summary>Field number for the "Axe_Level" field.</summary>
    public const int AxeLevelFieldNumber = 1;
    private int axeLevel_;
    /// <summary>
    /// 斧子等级
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int AxeLevel {
      get { return axeLevel_; }
      set {
        axeLevel_ = value;
      }
    }

    /// <summary>Field number for the "Axe_Type" field.</summary>
    public const int AxeTypeFieldNumber = 2;
    private int axeType_;
    /// <summary>
    /// 斧子品质
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int AxeType {
      get { return axeType_; }
      set {
        axeType_ = value;
      }
    }

    /// <summary>Field number for the "Axe_Prob" field.</summary>
    public const int AxeProb_FieldNumber = 3;
    private static readonly pb::FieldCodec<int> _repeated_axeProb_codec
        = pb::FieldCodec.ForInt32(26);
    private readonly pbc::RepeatedField<int> axeProb_ = new pbc::RepeatedField<int>();
    /// <summary>
    /// 概率
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<int> AxeProb_ {
      get { return axeProb_; }
    }

    /// <summary>Field number for the "Prop_Ids" field.</summary>
    public const int PropIdsFieldNumber = 4;
    private static readonly pb::FieldCodec<int> _repeated_propIds_codec
        = pb::FieldCodec.ForInt32(34);
    private readonly pbc::RepeatedField<int> propIds_ = new pbc::RepeatedField<int>();
    /// <summary>
    /// 道具列表
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<int> PropIds {
      get { return propIds_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as AxeProb);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(AxeProb other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (AxeLevel != other.AxeLevel) return false;
      if (AxeType != other.AxeType) return false;
      if(!axeProb_.Equals(other.axeProb_)) return false;
      if(!propIds_.Equals(other.propIds_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (AxeLevel != 0) hash ^= AxeLevel.GetHashCode();
      if (AxeType != 0) hash ^= AxeType.GetHashCode();
      hash ^= axeProb_.GetHashCode();
      hash ^= propIds_.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (AxeLevel != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(AxeLevel);
      }
      if (AxeType != 0) {
        output.WriteRawTag(16);
        output.WriteInt32(AxeType);
      }
      axeProb_.WriteTo(output, _repeated_axeProb_codec);
      propIds_.WriteTo(output, _repeated_propIds_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (AxeLevel != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(AxeLevel);
      }
      if (AxeType != 0) {
        output.WriteRawTag(16);
        output.WriteInt32(AxeType);
      }
      axeProb_.WriteTo(ref output, _repeated_axeProb_codec);
      propIds_.WriteTo(ref output, _repeated_propIds_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (AxeLevel != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(AxeLevel);
      }
      if (AxeType != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(AxeType);
      }
      size += axeProb_.CalculateSize(_repeated_axeProb_codec);
      size += propIds_.CalculateSize(_repeated_propIds_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(AxeProb other) {
      if (other == null) {
        return;
      }
      if (other.AxeLevel != 0) {
        AxeLevel = other.AxeLevel;
      }
      if (other.AxeType != 0) {
        AxeType = other.AxeType;
      }
      axeProb_.Add(other.axeProb_);
      propIds_.Add(other.propIds_);
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 8: {
            AxeLevel = input.ReadInt32();
            break;
          }
          case 16: {
            AxeType = input.ReadInt32();
            break;
          }
          case 26:
          case 24: {
            axeProb_.AddEntriesFrom(input, _repeated_axeProb_codec);
            break;
          }
          case 34:
          case 32: {
            propIds_.AddEntriesFrom(input, _repeated_propIds_codec);
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 8: {
            AxeLevel = input.ReadInt32();
            break;
          }
          case 16: {
            AxeType = input.ReadInt32();
            break;
          }
          case 26:
          case 24: {
            axeProb_.AddEntriesFrom(ref input, _repeated_axeProb_codec);
            break;
          }
          case 34:
          case 32: {
            propIds_.AddEntriesFrom(ref input, _repeated_propIds_codec);
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code
